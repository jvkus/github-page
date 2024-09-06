import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    
    return (
        <div id='error-page'>
            <h2>An unexpected error has occurred.</h2>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    );
}
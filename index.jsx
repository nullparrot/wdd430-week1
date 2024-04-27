const app = document.getElementById("app");

function Header({ title }) {
    return <h1>{title ? title : "Default title"}</h1>;
}

function HomePage() {
    function handleClick() {
        setLikes(likes + 1);
    }

    const [likes, setLikes] = React.useState(0);
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like({likes})</button>
        </div>
    );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);

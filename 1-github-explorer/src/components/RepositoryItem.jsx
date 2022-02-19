const RepositoryItem = (props) => {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <strong>{props.repository.description}</strong>

            <a href={props.repository.html_url}>Acessar repositório</a>
        </li>
    )
}

export default RepositoryItem;
import useFetch from "../useFetch"

const Events = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/events")

  console.log(data)

  return (
    <div>
      <ul>
        {data?.map((event) => (
          <li>
            <h3>{event.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Events

import Form from "./Form"

const Home = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="w-full h-fit flex flex-col items-center max-w-[600px]">
        <Form />
      </div>
    </div>
  )
}

export default Home
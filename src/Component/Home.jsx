import { useSelector } from "react-redux";

const Home = () => {
  const { num } = useSelector((state) => state.counterNumber);
  return (
    <div>
      <h1>Home</h1>
      <div className="row">
        <div className="col">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          maxime molestias deleniti delectus voluptas aliquid dolore
          perspiciatis distinctio ducimus voluptate. Quaerat deserunt aliquam ad
          sit dolorem officiis tempore quam dolore!
        </div>
        <div className="col">asdasd</div>
      </div>

      <div>{num}</div>
    </div>
  );
};

export default Home;

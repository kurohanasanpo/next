const Page = (props) => {
    console.log(props);
    return <div className="m-4 font-bold">Blog ID: {props.params.id}</div>;
  };
  
  export default Page;
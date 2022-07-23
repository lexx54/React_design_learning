import GeolocationContainer from "./container-presentation/GeolocationContainer";
import Fetch from "./FunctionAsChild/Fetch";
import List, { Props } from "./FunctionAsChild/List";
import MyComponentWithInnerWidth from "./HOC/MyComponentWithInnerWidth";

function App() {
  return (
    <div className="App">
      <GeolocationContainer />
      <MyComponentWithInnerWidth />
      <Fetch url="https://jsonplaceholder.typicode.com/posts">
        {(props: Props) => <List {...props} />}
      </Fetch>
    </div>
  );
}

export default App;

// Container-presentation Pattern
// The following are the characteristics of container components:
//   They are more concerned with behavior.
//   They render their presentational components.
//   They make API calls and manipulate data.
//   They define event handlers.
// The following are the characteristics of presentational components:
//   They are more concerned with the visual representation.
//   They render the HTML markup (or other components).
//   They receive data from the parents in the form of props.
//   They are often written as stateless functional components.
// As you can see, these patterns form a really powerful tool that will help you to develop
// your web applications faster
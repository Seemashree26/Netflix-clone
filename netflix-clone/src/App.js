import Input from "./components/input/Input";
import Content from "./components/content/Content";
const App = () => {
  return (
    <div className="App">
      <Input type="email" placeholder={"Email address"} size={"largeInput"} />
      <Input
        type="email"
        placeholder={"Email or Phone number"}
        size={"smallInput"}
      />
      <Input type="password" placeholder={"Password"} size={"smallInput"} />
      <Content
        heading="The biggest Indian hits. The best Indian stories. All streaming here."
        text="Watch anywhere. Cancel anytime."
        para="Ready to watch? Enter your email to create or restart your membership."
      />
      <Content
        heading="Enjoy on your TV"
        text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      />
      <Content
        heading="Download your shows to watch offline"
        text="Save your favourites easily and always have something to watch."
      />
      <Content
        heading="Watch everywhere"
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      />
      <Content
        heading="Create profiles for kids"
        text="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
      />
    </div>
  );
};
export default App;

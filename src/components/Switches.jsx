import Switch from "./Switch";

const Switches = (props) => {
  return (
    <div className="switches">
      <Switch switchx={props.switch1} setSwitch={props.setSwitch1} />
      <Switch switchx={props.switch2} setSwitch={props.setSwitch2} />
      <Switch switchx={props.switch3} setSwitch={props.setSwitch3} />
    </div>
  );
};

export default Switches;

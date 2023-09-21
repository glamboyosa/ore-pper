import path from "path";
export default {
  name: "add",
  run: ({
    feature,
  }: {
    feature: {
      twStepper: () => string;
      framerStepper: () => string;
    };
  }) => {

    console.log(feature.twStepper());
    console.log(`Hello  Strangerrrr!`);
  },
};

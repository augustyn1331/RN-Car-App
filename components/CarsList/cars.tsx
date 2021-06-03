export interface ICar {
  id: number,
  name: string,
  subTitle: string,
  image: any,
  subTitleExtra?: string
}

const cars: Array<ICar> = [
  // {
  //   name: "Cybertruck",
  //   subTitle: "This is the future",
  //   image: require("../../assets/images/Cybertruck.jpg"),
  // },
  {
    id:1,
    name: "Model S",
    subTitle: "Starting at $69,420",
    image: require("../../assets/images/ModelS.jpeg"),
  },
  {
    id:2,
    name: "Model 3",
    subTitle: "Order Online for",
    subTitleExtra: "Touchless Delivery",
    image: require("../../assets/images/Model3.jpeg"),
  },
  {
    id:3,
    name: "Model X",
    subTitle: "Order Online for",
    subTitleExtra: "Touchless Delivery",
    image: require("../../assets/images/ModelX.jpeg"),
  },
  {
    id:4,
    name: "Model Y",
    subTitle: "Order Online for",
    subTitleExtra: "Touchless Delivery",
    image: require("../../assets/images/ModelY.jpeg"),
  },
];

export default cars;
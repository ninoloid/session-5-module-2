import { string } from "prop-types";

export default function Title({ title }) {
  return <h1 className="color-blue">{title}</h1>;
}

Title.propTypes = {
  title: string,
};

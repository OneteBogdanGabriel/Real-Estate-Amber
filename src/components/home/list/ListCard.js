import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextInfoCardContent from "@mui-treasury/components/cardContent/textInfo";
import { useBlogCardContentStyles } from "@mui-treasury/styles/cardContent/blog";
import CardContentBody from "./CardContentBody.js";
import CardContentHeader from "./CardContentHeader.js";
import img from "../../../images/heshewe.jpg";
import "./ListCard.css";
import propertyReducer from "../../../redux/reducers/propertyReducer.js";
import { Link } from "react-router-dom";

const ListCard = (props) => {

  const { data } = props;
  return (
    <Link to={"/property/" + propertyReducer.slug}>
      <Card className="root">
        <img className="media" alt="Property pic" src={img} />
        <CardContent>
          <TextInfoCardContent
            properties={data}
            overline={"28 MAR 2019"}
            heading={<CardContentHeader />}
            body={<CardContentBody data={data}/>}
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListCard;

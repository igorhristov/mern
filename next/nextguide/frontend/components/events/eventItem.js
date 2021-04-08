import React from "react";

import classes from "./eventItem.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/dateIcon";
import AddressIcon from "../icons/addressIcon";
import ArrowRightIcon from "../icons/arrowRight";

const eventItem = (props) => {
  const { id, title, image, date, location } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAddress = location.replace(", ", "\n");
  const exploreLink = `/event/${id}`;

  return (
    <li className={classes.item}>
      <img src={image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon /> <time>{humanReadableDate}</time>
          </div>

          <div className={classes.address}>
            <AddressIcon /> <address>{formatedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default eventItem;

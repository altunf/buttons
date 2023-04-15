import React from "react";
import Button from "../button";
import "./style.css";

const ButtonList = () => {
  return (
    <>
      <>
        <div className="button-default">&lt;Button /&gt;</div>
        <Button />
      </>
      <>
        <div className="def-hover">&:hover, &:focus</div>
        <Button defaultButton="button-hover" />
      </>
      <>
        <div className="var-outline">&lt;Button variant=”outline” /&gt;</div>
        <Button variant="outline" />
      </>
      <>
        <div className="var-outline-hover">&:hover, &:focus</div>
        <Button variant="outline-hover" />
      </>
      <>
        <div className="var-text">&lt;Button variant="text" /&gt;</div>
        <Button variant="text" />
      </>
      <>
        <div className="var-text-hover">&:hover, &:focus</div>
        <Button variant="text-hover" />
      </>
      <>
        <div className="disable-shadow">&lt;Button disableShadow /&gt;</div>
        <Button disableShadow />
      </>
      <>
        <div className="button-disable">&lt;Button disabled /&gt;</div>
        <Button disabled />
      </>
      <>
        <div className="text-disable">
          &lt;Button variant="text" disabled /&gt;
        </div>
        <Button variant="text" disabled />
      </>
      <>
        <div className="i-start">
          &lt;Button startIcon="local_grocery_store" /&gt;
        </div>
        <Button startIcon="local_grocery_store" />
      </>
      <>
        <div className="i-end">
          &lt;Button endIcon="local_grocery_store" /&gt;
        </div>
        <>
          <Button endIcon="local_grocery_store" />
        </>
      </>
      <>
        <div className="sm-size">&lt;Button size="sm" /&gt;</div>
        <Button size="sm" />
      </>
      <>
        <div className="md-size">&lt;Button size="md" /&gt;</div>
        <Button size="md" />
      </>
      <>
        <div className="lg-size">&lt;Button size="lg" /&gt;</div>
        <Button size="lg" />
      </>
      <>
        <div className="color-default">&lt;Button color="default" /&gt;</div>
        <Button color="default" />
      </>
      <>
        <div className="color-primary">&lt;Button color="primary" /&gt;</div>
        <Button color="primary" />
      </>
      <>
        <div className="color-secondary">
          &lt;Button color="secondary" /&gt;
        </div>
        <Button color="secondary" />
      </>
      <>
        <div className="color-danger">&lt;Button color="danger" /&gt;</div>
        <Button color="danger" />
      </>
      <>
        <div className="color-def-hover">&:hover, &:focus</div>
        <Button color="default-hover" />
      </>
      <>
        <Button color="primary-hover" />
      </>
      <>
        <Button color="secondary-hover" />
      </>
      <>
        <Button color="danger-hover" />
      </>
    </>
  );
};

export default ButtonList;

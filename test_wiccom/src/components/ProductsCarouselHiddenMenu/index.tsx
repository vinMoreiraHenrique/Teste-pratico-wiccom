import { useState } from "react";
import SelectableButton from "../SelectableButton";

interface IProductsCarouselHiddenMenu {
  modelName?: string;
}

export const ProductsCarouselHiddenMenu = ({
  modelName,
}: IProductsCarouselHiddenMenu) => {
  return (
    <>
      {modelName == "flavour" ? (
        <div
          className="buy-panel"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ marginBottom: "7px" }}>Sabor</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: "170px",
            }}
          >
            <SelectableButton textButton="toffee" />
            <SelectableButton textButton="chocolate" />
            <SelectableButton textButton="morango" />
            <SelectableButton textButton="baunilha" />
          </div>
        </div>
      ) : (
        <div
          className="buy-panel"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ marginBottom: "7px" }}>Tamanho</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
            }}
          >
            <SelectableButton textButton="p" width="45px" />
            <SelectableButton textButton="m" width="45px" />
            <SelectableButton textButton="g" width="45px" />
            <SelectableButton textButton="gg" width="45px" />
            <SelectableButton textButton="exgg2" width="45px" />
            <SelectableButton textButton="exgg2" width="45px" />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              //   justifyContent: "center",
              //   alignItems: "center",
              width: "200px",
            }}
          >
            <div style={{ display: "flex", width: "100%", marginTop: "10px" }}>
              <SelectableButton
                textButton=""
                modelName="circle"
                backgroundColorCircle="red"
              />
              <SelectableButton
                textButton=""
                modelName="circle"
                backgroundColorCircle="blue"
              />
              <SelectableButton
                textButton=""
                modelName="circle"
                backgroundColorCircle="green"
              />
              <SelectableButton
                textButton=""
                modelName="circle"
                backgroundColorCircle="yellow"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

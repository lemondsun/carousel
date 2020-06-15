import React from "react";
import { shallow } from "enzyme";
import CarouselSlide from "../components/CarouselSlide";

describe("CarouselSlide", () => {
  it("renders a <figure>", () => {
    const wrapper = shallow(<CarouselSlide />);
    expect(wrapper.type()).toBe("figure");
  });
});

describe("CarouselSlide", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CarouselSlide
        imgUrl="https://example.com/default.jpg"
        description="Default test image"
      />
    );
  });

  it("renders a <figure>", () => {
    expect(wrapper.type()).toBe("figure");
  });

  it("renders an <img> and a <figcaption> as children", () => {
    expect(wrapper.childAt(0).type()).toBe("img");
    expect(wrapper.childAt(1).type()).toBe("figcaption");
  });

  it("passes `imgURl` through to the <img>", () => {
    const imgURL = "https://example.com/image.png";
    wrapper.setProps({ imgURL });
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(imgURL);
  });

  it("uses `description` and `attribution` as the <figcaption>", () => {
    const description = "A jaw-droppingly spectacular image";
    const attribution = "Trevor Burnham";
    wrapper.setProps({ description, attribution });
    expect(wrapper.find("figcaption").text()).toBe(
      `${description} ${attribution}`
    );
    expect(wrapper.find("figcaption strong").text()).toBe(description);
  });

 
});

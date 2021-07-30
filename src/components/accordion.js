import React, {useState} from "react";

const Accordion = ({ AccordionItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const TitleClicked = (index) => {
    setActiveIndex(index)
  }

  const renderAccordionItems = AccordionItems.map((AccordionItem, index) => {
    const ActiveClass = index === activeIndex ? "active" : "";

    return (
      <div key={AccordionItem.title}>
        <div className={"title " + ActiveClass} onClick={()=> TitleClicked(index)}>
          <i className="dropdown icon"></i>
          {AccordionItem.title}
        </div>
        <div className={"content " + ActiveClass}>
          <p>{AccordionItem.content}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h3>Accordion Example</h3>
      {AccordionItems.length}
        <br/>
        <br/>
      <div className="ui styled accordion">{renderAccordionItems}
      <h1>
        {activeIndex}
      </h1>
      </div>
    </div>
  );
};

export default Accordion;

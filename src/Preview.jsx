import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import Button from "./Button";

const Preview = ({ preview, sections }) => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <>
      <div className="overlay"></div>
      <div className="btn-box">
        <Button
          variation={"primary"}
          btnType={"button"}
          clickAction={reactToPrintFn}
        >
          Print
        </Button>
        <Button
          variation={"secondary"}
          btnType={"button"}
          clickAction={preview}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.2"
            baseProfile="tiny"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484v1.437c0 .534-.208 1.036-.586 1.414-.756.756-2.077.751-2.823.005l-6.293-6.207c-.191-.189-.298-.444-.298-.713s.107-.524.298-.712l6.288-6.203c.754-.755 2.073-.756 2.829.001.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1c0 .442-.29.832-.714.958-.095.027-.19.042-.286.042-.331 0-.646-.165-.836-.452zm-7.141-5.536c2.207.056 4.638.394 6.758 2.121-.768-3.216-3.477-5.702-6.893-6.08-.504-.056-.888-.052-.888-.052v-3.497l-5.576 5.496 5.576 5.5v-3.499l1.023.011z"></path>
          </svg>
        </Button>
      </div>
      <div className="cv-box" ref={contentRef}>
        <div className="cv-header">
          <p className="p-name">
            {sections[0]?.info.inputs[1].value}{" "}
            {sections[0]?.info.inputs[2].value}
          </p>
          <p className="p-title">{sections[0]?.info.inputs[3].value}</p>
        </div>
        <div className="info-container">
          <div className="info-box">
            <div className="info-mini-box">
              <p className="p-info-title">Description</p>
              <p className="description">
                {sections[0]?.info?.inputs[0]?.value}
              </p>
            </div>
            <div className="info-mini-box">
              <p className="p-info-title">Education</p>
              {sections[1]?.blocks?.map((block) => (
                <div key={block.id} className="education-box">
                  <p className="p-date">
                    {`${block.inputs[4].value} - ${block.inputs[5].value}`}
                  </p>
                  <div className="p-box">
                    <p>{block.inputs[2].value}</p>
                    <p>{block.inputs[3].value}</p>
                    <p>
                      {block.inputs[0].value}
                      <span>, {block.inputs[1].value}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="info-mini-box">
              <p className="p-info-title">Experience</p>
              {sections[2]?.blocks?.map((block) => (
                <div key={block.id} className="experience-box">
                  <p className="p-date">
                    {`${block.inputs[3].value} - ${block.inputs[4].value}`}
                  </p>
                  <div className="p-box">
                    <p>{block.inputs[0].value}</p>
                    <p>
                      {block.inputs[1].value}
                      <span>, {block.inputs[2].value}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="personal-details-box">
            <img
              src={
                sections[0].info.inputs[4].value
                  ? sections[0].info.inputs[4].value
                  : "prsoneimg.jpeg"
              }
              alt="person-img"
            />
            <div className="details-info">
              <p className="p-info-title">Personal Details</p>
              <div className="details-info-mini-box">
                {sections[0].info.inputs.map(
                  (o, index) =>
                    index > 4 && (
                      <p key={index}>
                        {o.placeholder}
                        <span>{o.value}</span>
                      </p>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Preview;

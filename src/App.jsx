import { useEffect, useState } from "react";
import "./App.css";
import { cvFormSections, cvSections } from "./data.js";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [sections, setSections] = useState(cvFormSections);
  const [cv, setCv] = useState(cvSections);

  const createBlock = (block) => ({
    ...block,
    id: crypto.randomUUID(),
  });

  const updateCvField = (sectionName, index, inputName, value) => {
    const arrayName = sectionName.replaceAll(" ", "").toLowerCase();
    setCv((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName].map((obj, i) =>
        i === index ? { ...obj, [inputName]: value } : obj
      ),
    }));
  };

  const addCvEntry = (sectionName) => {
    const selectedArray = sectionName.replaceAll(" ", "").toLowerCase();

    setCv((prev) => ({
      ...prev,
      [selectedArray]: [
        ...prev[selectedArray],
        { ...cvSections[selectedArray][0] },
      ],
    }));
  };

  const removeCvEntry = (sectionName, index) => {
    const selectedObject = sectionName.replaceAll(" ", "").toLowerCase();

    setCv((prev) => ({
      ...prev,
      [selectedObject]: [...prev[selectedObject].filter((_, i) => i !== index)],
    }));
  };

  const removeSectionBlock = (sectionId, blockId) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id !== sectionId
          ? section
          : {
              ...section,
              blocks: section.blocks.filter((block) => block.id !== blockId),
            }
      )
    );
  };

  const addBlocksToSection = (id, title) => {
    setSections((prev) =>
      prev.map((section) => {
        if (section.id !== id) return section;

        const templateSection = cvFormSections.find((s) => s.title === title);
        return {
          ...section,
          blocks: [
            ...section.blocks,
            ...templateSection.blocks.map((block) => createBlock(block)),
          ],
        };
      })
    );
  };

  const logCv = (cv) => {
    console.log(cv);
  };

  return (
    <>
      <header>
        <h1 className="heading">CV CREATOR</h1>
      </header>
      <main>
        {sections.map((section) => (
          <div key={section.id} className="section">
            <p>{section.title}</p>

            {section.blocks.map((block, blockIndex) => (
              <div key={block.id}>
                {block.inputs?.map((input, inputIndex) => (
                  <Input
                    key={inputIndex}
                    inputType="text"
                    inputName={input.name}
                    inputPlaceholder={input.placeholder}
                    variation="standard"
                    value={
                      cv[section.title.replaceAll(" ", "").toLowerCase()][
                        blockIndex
                      ][input.name]
                    }
                    action={(value) =>
                      updateCvField(
                        section.title,
                        blockIndex,
                        input.name,
                        value
                      )
                    }
                  />
                ))}

                {block.clear?.map((btn, index) => (
                  <Button
                    key={index}
                    variation={btn.variation}
                    btnType="button"
                    clickAction={() => {
                      removeSectionBlock(section.id, block.id);
                      removeCvEntry(section.title, blockIndex);
                    }}
                  >
                    {btn.btnText}
                  </Button>
                ))}
              </div>
            ))}

            {section.add?.map((btn, index) => (
              <Button
                key={index}
                variation={btn.variation}
                btnType="button"
                clickAction={() => {
                  addBlocksToSection(section.id, section.title),
                    addCvEntry(section.title);
                }}
              >
                {btn.btnText}
              </Button>
            ))}
          </div>
        ))}
        <Button
          btnType={"button"}
          variation={"primary"}
          clickAction={() => {
            logCv(cv);
          }}
        >
          Preview
        </Button>
        <Button
          btnType={"button"}
          variation={"secondary"}
          clickAction={() => {
            setSections(cvFormSections);
            setCv(cvSections);
          }}
        >
          Reset
        </Button>
      </main>
    </>
  );
}

export default App;

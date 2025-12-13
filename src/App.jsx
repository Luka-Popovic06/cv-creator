import { useState } from "react";
import "./App.css";
import { cvFormSections } from "./data.js";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [sections, setSections] = useState(cvFormSections);

  const createBlock = (block) => ({
    ...block,
    id: crypto.randomUUID(),
  });

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

  //Updating Text
  const updateBlockInput = (
    block,
    blockId,
    inputIndex,
    inputValue,
    inputName
  ) => {
    return block.id !== blockId
      ? block
      : {
          ...block,
          inputs: block.inputs.map((input, index) =>
            index !== inputIndex
              ? input
              : {
                  ...input,
                  [inputName]: inputValue,
                }
          ),
        };
  };

  const updateSectionBlockInput = (
    title,
    selectedBlockId,
    inputIndex,
    inputValue,
    inputName
  ) => {
    setSections((prev) =>
      prev.map((section) =>
        section.title !== title
          ? section
          : {
              ...section,
              blocks: section.blocks.map((block) =>
                updateBlockInput(
                  block,
                  selectedBlockId,
                  inputIndex,
                  inputValue,
                  inputName
                )
              ),
            }
      )
    );
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

            {section.blocks.map((block) => (
              <div key={block.id}>
                {block.inputs?.map((input, inputIndex) => (
                  <Input
                    key={inputIndex}
                    inputType="text"
                    inputName={input.name}
                    inputPlaceholder={input.placeholder}
                    variation="standard"
                    value={input[input.name]}
                    action={(value) =>
                      updateSectionBlockInput(
                        section.title,
                        block.id,
                        inputIndex,
                        value,
                        input.name
                      )
                    }
                  />
                ))}

                {block.clear?.map((btn, index) => (
                  <Button
                    key={index}
                    variation={btn.variation}
                    btnType="button"
                    clickAction={() => removeSectionBlock(section.id, block.id)}
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
                clickAction={() =>
                  addBlocksToSection(section.id, section.title)
                }
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
            logCv();
          }}
        >
          Preview
        </Button>
        <Button
          btnType={"button"}
          variation={"secondary"}
          clickAction={() => {
            setSections(cvFormSections);
          }}
        >
          Reset
        </Button>
      </main>
    </>
  );
}

export default App;

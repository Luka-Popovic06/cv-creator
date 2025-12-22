import { useState } from "react";
import "./App.css";
import { cvFormSections } from "./data.js";
import Button from "./Button";
import Input from "./Input";
import Preview from "./Preview.jsx";

function App() {
  const [sections, setSections] = useState(cvFormSections);
  const [preview, setPreview] = useState(false);

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
  const updatePersonalInformation = (inputValue, inputIndex) => {
    setSections((prev) =>
      prev.map((section) =>
        section.title !== "Personal information"
          ? section
          : {
              ...section,
              info: {
                ...section.info,
                inputs: section.info.inputs.map((input, index) =>
                  index !== inputIndex
                    ? input
                    : {
                        ...input,
                        value: inputValue,
                      }
                ),
              },
            }
      )
    );
  };

  const updateBlockInput = (block, blockId, inputIndex, inputValue) => {
    return block.id !== blockId
      ? block
      : {
          ...block,
          inputs: block.inputs.map((input, index) =>
            index !== inputIndex
              ? input
              : {
                  ...input,
                  value: inputValue,
                }
          ),
        };
  };

  const updateSectionBlockInput = (
    title,
    selectedBlockId,
    inputIndex,
    inputValue
  ) => {
    setSections((prev) =>
      prev.map((section) =>
        section.title !== title || title === "Personal information"
          ? section
          : {
              ...section,
              blocks: section.blocks.map((block) =>
                updateBlockInput(block, selectedBlockId, inputIndex, inputValue)
              ),
            }
      )
    );
  };

  const getFileUrl = (files) => {
    return URL.createObjectURL(files[0]);
  };

  return (
    <>
      {preview ? (
        <Preview preview={() => setPreview(false)} sections={sections} />
      ) : (
        <>
          <header>
            <h1 className="heading">CV CREATOR</h1>
          </header>
          <main>
            {sections.map((section) => (
              <div key={section.id} className="section">
                <p>{section.title}</p>
                {section?.info?.inputs?.map((input, inputIndex) =>
                  input.type === "text" ? (
                    <Input
                      key={inputIndex}
                      inputType={input.type}
                      inputName={input.name}
                      inputPlaceholder={input.placeholder}
                      variation="standard"
                      value={input.value}
                      action={(e) =>
                        updatePersonalInformation(e.target.value, inputIndex)
                      }
                    />
                  ) : (
                    <label key={inputIndex} className="standard">
                      <Input
                        inputType={input.type}
                        inputName={input.name}
                        inputPlaceholder={input.placeholder}
                        action={(e) => {
                          updatePersonalInformation(
                            getFileUrl(e.target.files),
                            inputIndex
                          );
                        }}
                      />
                      <span>Photo</span>
                    </label>
                  )
                )}
                {section?.blocks?.map((block) => (
                  <div key={block.id}>
                    {block?.inputs?.map((input, inputIndex) => (
                      <Input
                        key={inputIndex}
                        inputType="text"
                        inputName={input.name}
                        inputPlaceholder={input.placeholder}
                        variation="standard"
                        value={input.value}
                        action={(e) =>
                          updateSectionBlockInput(
                            section.title,
                            block.id,
                            inputIndex,
                            e.target.value
                          )
                        }
                      />
                    ))}

                    {block.clear?.map((btn, index) => (
                      <Button
                        key={index}
                        variation={btn.variation}
                        btnType="button"
                        clickAction={() =>
                          removeSectionBlock(section.id, block.id)
                        }
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
                setPreview(true);
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
      )}
    </>
  );
}

export default App;

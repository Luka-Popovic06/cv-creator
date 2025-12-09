import { useEffect, useState } from "react";
import "./App.css";
import { cvFormSections, cvSections } from "./data.js";
import Button from "./Button";
import Input from "./Input";

function App() {
  /////////////////
  return (
    <>
      <header>
        <h1 className="heading">CV CREATOR</h1>
      </header>
      <main>
        <form>
          {sections.map((section) => (
            <div key={section.id} className="section">
              <p>{section.title}</p>

              {section.sec.map((block, blockIndex) => (
                <div key={block.id}>
                  {block.inputs?.map((input, inputIndex) => (
                    <Input
                      key={inputIndex}
                      inputType="text"
                      inputName={input.name}
                      inputPlaceholder={input.placeholder}
                      variation="standard"
                      action={(value) =>
                        menjanjeCv(section.title, blockIndex, input.name, value)
                      }
                    />
                  ))}

                  {block.clear?.map((btn, index) => (
                    <Button
                      key={index}
                      variation={btn.variation}
                      btnType="button"
                      clickAction={() => {
                        clearSectionInputs(section.id, block.id);
                        brisanjeTeVrednostiCV(section.title, blockIndex);
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
                    addSection(section.id, section.title),
                      dodavanjeNoveVrednost(section.title);
                  }}
                >
                  {btn.btnText}
                </Button>
              ))}
            </div>
          ))}
          <Button btnType={"submit"} variation={"primary"}>
            Preview
          </Button>
          <Button btnType={"button"} variation={"secondary"}>
            Reset
          </Button>
        </form>
      </main>
    </>
  );
}

export default App;

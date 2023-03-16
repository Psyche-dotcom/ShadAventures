import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Heroimage from "../public/heroImg.png";
import {
  TreeGridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Sort,
  Page,
  Filter,
  WrapMode,
} from "@syncfusion/ej2-react-treegrid";
import { summaryData } from "../component/dummyData";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <title>StarShip Horizon Adventures</title>
        <meta name="description" content="Adventure card bank" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="conImg">
          <Image
            src={Heroimage}
            alt="hero image"
            className="imghero imghero2"
            width={400}
          />
        </div>

        <div>
          <TreeGridComponent
            dataSource={summaryData}
            allowPaging={true}
            allowSorting={true}
            allowFiltering={true}
            allowTextWrap={true}
            filterSettings={{ type: "Excel" }}
            textWrapSettings={{
              wrapMode: "Content",
            }}
            pageSettings={{ pageSize: 5 }}
          >
            <Inject services={[Page, Sort, Filter]} />
            <ColumnsDirective>
              <ColumnDirective
                field="Card"
                headerText="Card"
                width="150"
                textAlign="Left"
                template={(props) => {
                  const handleImageClick = () => {
                    setShowModal(true);
                  };

                  return (
                    <>
                      <div onClick={handleImageClick}>
                        <Image
                          className="imghero2"
                          src={props.CardImageUrl}
                          width={150}
                          height={150}
                          alt={props.Card}
                        />
                      </div>
                      {showModal && (
                        <div className="modal">
                          <div className="modal-content">
                            <span
                              className="close"
                              onClick={() => setShowModal(false)}
                              style={{ color: "white", fontSize: "40px" }}
                            >
                              &times;
                            </span>
                            <Image
                              src={props.CardImageUrl}
                              alt={props.Card}
                              className="imghero2"
                              width={400}
                              height={600}
                            />
                          </div>
                        </div>
                      )}
                    </>
                  );
                }}
              />

              <ColumnDirective field="Type" headerText="Type" width="100" />
              <ColumnDirective field="Rarity" headerText="Rarity" width="100" />
              <ColumnDirective
                field="Description"
                headerText="Description"
                textAlign="Left"
                width="400"
                wordWrap="break-word"
              />
            </ColumnsDirective>
          </TreeGridComponent>
        </div>
      </main>
    </>
  );
}

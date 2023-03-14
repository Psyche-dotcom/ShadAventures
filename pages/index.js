import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Heroimage from "../public/heroImg.png";
import myImage from "../public/2022-1.png";
import {
  TreeGridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Sort,
  Page,
  Filter,
} from "@syncfusion/ej2-react-treegrid";
import { summaryData } from "../component/dummyData";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
            className="imghero"
            width={300}
          />
        </div>

        <div>
          <TreeGridComponent
            dataSource={summaryData}
            allowPaging={true}
            allowSorting={true}
            allowFiltering={true}
            filterSettings={{ type: "Excel" }}
            textWrapSettings={{
              wrapMode: "Content",
            }}
          >
            <Inject services={[Page, Sort, Filter]} />
            <ColumnsDirective>
              <ColumnDirective
                field="Card"
                headerText="Card"
                width="200"
                textAlign="Left"
                template={(props) => {
                  return (
                    <div>
                      <Image
                        src={props.CardImageUrl}
                        width={150}
                        height={100}
                        alt={props.Card}
                      />
                    </div>
                  );
                }}
              />
              <ColumnDirective field="Type" headerText="Type" width="150" />
              <ColumnDirective field="Rarity" headerText="Rarity" width="150" />
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

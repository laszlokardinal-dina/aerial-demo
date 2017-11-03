import React, { Component } from "react";

import {
  ScreenDetailsProvider,
  Container,
  Row,
  Col,
  Show,
  Switch
} from "react-aerial";

import Card from "./Card.jsx";
import TextInput from "./TextInput.jsx";
import SelectInput from "./SelectInput.jsx";
import SizeControl from "./SizeControl.jsx";

const style = require("./App.css");

const loremIpsum = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis felis felis, et sollicitudin est porttitor non. Morbi nibh libero, pulvinar vel tincidunt ac, efficitur ut augue.",
  "Nam sagittis magna vel sem iaculis, sit amet blandit tellus feugiat.",
  "Ut feugiat mattis arcu, at rutrum dolor tincidunt sit amet. Quisque eget diam venenatis, faucibus massa at, posuere felis. Vestibulum lobortis, enim non dignissim congue, nunc enim sagittis lacus, nec commodo leo diam at dolor. Quisque nibh dolor, eleifend ultrices nulla lacinia, tempor ultrices urna.",
  "Donec ullamcorper magna sit amet lectus tristique convallis. Donec sodales quis dolor eget dapibus. Sed maximus volutpat accumsan. In id nulla nisi. Mauris tempor quam ut consequat tempor. ",
  "Morbi et turpis ac sem bibendum sollicitudin.",
  "Nullam ut massa ac tellus commodo tempor quis at purus.",
  "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam purus nisl, tempus feugiat magna sit amet, tristique suscipit ligula. Fusce bibendum, nunc vel mattis scelerisque, nulla libero semper nisl, a volutpat orci leo at lorem. Proin quis dictum velit. Suspendisse eu dolor a libero convallis sagittis. Curabitur faucibus elementum turpis quis vestibulum. Donec enim odio, ullamcorper sit amet purus sed, posuere imperdiet ante.",
  "Curabitur vitae mi a tortor dictum dignissim."
];

const ROW_VERTICAL_ALIGNS = [
  { name: "", value: undefined },
  { name: "top", value: "top" },
  { name: "center", value: "center" },
  { name: "bottom", value: "bottom" },
  { name: "stretch", value: "stretch" }
];

const ROW_HORIZONTAL_ALIGNS = [
  { name: "", value: undefined },
  { name: "left", value: "left" },
  { name: "center", value: "center" },
  { name: "right", value: "right" }
];

const COL_VERTICAL_ALIGNS = [
  { name: "", value: undefined },
  { name: "auto", value: "auto" },
  { name: "top", value: "top" },
  { name: "center", value: "center" },
  { name: "bottom", value: "bottom" },
  { name: "stretch", value: "stretch" },
  { name: "baseline", value: "baseline" }
];

const sizes = ["xs", "sm", "md", "lg"];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deviceWidth: window.innerWidth,
      row: {
        xsHorizontalGutter: 8,
        smHorizontalGutter: undefined,
        mdHorizontalGutter: undefined,
        lgHorizontalGutter: undefined,
        xsVerticalGutter: 8,
        smVerticalGutter: undefined,
        mdVerticalGutter: undefined,
        lgVerticalGutter: undefined,
        xsHorizontalAlign: undefined,
        smHorizontalAlign: undefined,
        mdHorizontalAlign: undefined,
        lgHorizontalAlign: undefined,
        xsVerticalAlign: undefined,
        smVerticalAlign: undefined,
        mdVerticalAlign: undefined,
        lgVerticalAlign: undefined
      },
      cols: new Array(7).fill(null).map((_, index, { length }) => ({
        id: index.toString(),
        title: String.fromCharCode(65 + index),
        text: loremIpsum[index],
        xs: 1,
        sm: 0.5,
        md: undefined,
        lg: 0.25,
        xsOffset: undefined,
        smOffset: undefined,
        mdOffset: undefined,
        lgOffset: undefined,
        xsVerticalAlign: undefined,
        smVerticalAlign: undefined,
        mdVerticalAlign: undefined,
        lgVerticalAlign: undefined,
        xsOrder: undefined,
        smOrder: length - index,
        mdOrder: 0,
        lgOrder: undefined
      }))
    };
  }

  rowParameterChange = (key, value) => {
    const { row } = this.state;

    this.setState({
      row: { ...row, [key]: value }
    });
  };

  colParameterChange = (id, key, value) => {
    const { cols } = this.state;

    this.setState({
      cols: cols.map(col => (col.id === id ? { ...col, [key]: value } : col))
    });
  };

  render() {
    const { deviceWidth, row, cols } = this.state;

    return (
      <ScreenDetailsProvider deviceWidth={deviceWidth}>
        <div className={style.app}>
          <div className={style.header}>
            <div className={style.headerItem}>
              <div className={style.title}>Aerial Demo Page</div>
              <div>
                github: <br />
                <a href="https://github.com/laszlokardinal/aerial">
                  https://github.com/laszlokardinal/aerial
                </a>
              </div>
              <div>
                npm: <br />
                <a href="https://www.npmjs.com/package/react-aerial">
                  https://www.npmjs.com/package/react-aerial
                </a>
              </div>
            </div>
            <div className={style.headerItem}>
              <div className={style.title}>Device width</div>
              <SizeControl
                deviceWidth={deviceWidth}
                onDeviceWidthChange={deviceWidth =>
                  this.setState({ deviceWidth })}
              />
            </div>
            <div className={style.headerItem}>
              <div className={style.title}>Row props</div>
              <table className={style.headerTable}>
                <tbody>
                  <tr>
                    {sizes.map(size => (
                      <td key={size}>
                        <TextInput
                          numeric
                          value={row[`${size}HorizontalGutter`]}
                          label={`${size}HorizontalGutter`}
                          onChange={value =>
                            this.rowParameterChange(
                              `${size}HorizontalGutter`,
                              value
                            )}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {sizes.map(size => (
                      <td key={size}>
                        <TextInput
                          numeric
                          value={row[`${size}VerticalGutter`]}
                          label={`${size}VerticalGutter`}
                          onChange={value =>
                            this.rowParameterChange(
                              `${size}VerticalGutter`,
                              value
                            )}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {sizes.map(size => (
                      <td key={size}>
                        <SelectInput
                          value={row[`${size}VerticalAlign`]}
                          label={`${size}VerticalAlign`}
                          options={ROW_VERTICAL_ALIGNS}
                          onChange={value =>
                            this.rowParameterChange(
                              `${size}VerticalAlign`,
                              value
                            )}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {sizes.map(size => (
                      <td key={size}>
                        <SelectInput
                          value={row[`${size}HorizontalAlign`]}
                          label={`${size}HorizontalAlign`}
                          options={ROW_HORIZONTAL_ALIGNS}
                          onChange={value =>
                            this.rowParameterChange(
                              `${size}HorizontalAlign`,
                              value
                            )}
                        />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={style.virtualScreenWrapper}>
            <div className={style.virtualScreen} style={{ width: deviceWidth }}>
              <Container>
                <Row {...row}>
                  {cols.map(col => (
                    <Col key={col.id} {...col}>
                      <Card>
                        <div className={style.cardTitle}>Col {col.title}</div>
                        <table className={style.cardTable}>
                          <tbody>
                            <tr>
                              {sizes.map(size => (
                                <td key={size}>
                                  <TextInput
                                    numeric
                                    value={col[size]}
                                    label={size}
                                    onChange={value =>
                                      this.colParameterChange(
                                        col.id,
                                        size,
                                        value
                                      )}
                                  />
                                </td>
                              ))}
                            </tr>
                            <tr>
                              {sizes.map(size => (
                                <td key={size}>
                                  <TextInput
                                    numeric
                                    value={col[`${size}Offset`]}
                                    label={`${size}Offset`}
                                    onChange={value =>
                                      this.colParameterChange(
                                        col.id,
                                        `${size}Offset`,
                                        value
                                      )}
                                  />
                                </td>
                              ))}
                            </tr>
                            <tr>
                              {sizes.map(size => (
                                <td key={size}>
                                  <SelectInput
                                    value={col[`${size}VerticalAlign`]}
                                    label={`${size}VerticalAlign`}
                                    options={COL_VERTICAL_ALIGNS}
                                    onChange={value =>
                                      this.colParameterChange(
                                        col.id,
                                        `${size}VerticalAlign`,
                                        value
                                      )}
                                  />
                                </td>
                              ))}
                            </tr>
                            <tr>
                              {sizes.map(size => (
                                <td key={size}>
                                  <TextInput
                                    numeric
                                    value={col[`${size}Order`]}
                                    label={`${size}Order`}
                                    onChange={value =>
                                      this.colParameterChange(
                                        col.id,
                                        `${size}Order`,
                                        value
                                      )}
                                  />
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                        <div className={style.cardText}>{col.text}</div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </ScreenDetailsProvider>
    );
  }
}

export default App;

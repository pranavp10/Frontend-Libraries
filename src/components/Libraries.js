import {
  Framework,
  UiLibrary,
  CssInJs,
  StateManagement,
  ReactDataFetching,
  Fetchers,
  Document,
  Notes,
} from './List';

const Libraries = () => (
  <div className="flex flex-wrap flex-col p-4">
    <Framework />
    <Fetchers />
    <StateManagement />
    <ReactDataFetching />
    <CssInJs />
    <UiLibrary />
    <Document />
    <Notes />
  </div>
);
export default Libraries;

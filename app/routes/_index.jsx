import { 
  Sandpack,
  SandpackProvider, 
  SandpackLayout, 
  SandpackCodeEditor, 
  SandpackFileExplorer 
} from "@codesandbox/sandpack-react";
import { cobalt2 } from "@codesandbox/sandpack-themes";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix Hello!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix Hello</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>

      {/* <Sandpack 
      theme={cobalt2}
        template="react" 
        files={{
          '/Wrapper.js': `export default () => "";`,
          '/Button.js': {
            code: `export default () => {
              return <button>Hello</button>
            };`,
            readOnly: true, // Set as non-editable, defaults to `false`
            active: true, // Set as main file, defaults to `false`
            hidden: false // Tab visibility, defaults to `false`
          }
        }}
      />; */}

<SandpackProvider theme={cobalt2} template="react">
    <SandpackLayout>
      <SandpackFileExplorer />
      <SandpackCodeEditor />
    </SandpackLayout>
  </SandpackProvider>
    </div>
  );
}

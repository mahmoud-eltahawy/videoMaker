import { Img, staticFile, useCurrentFrame } from "remotion"
import { Light as SyntaxHighlighter} from "react-syntax-highlighter"
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import rs from 'react-syntax-highlighter/dist/esm/languages/hljs/rust';

const text = `
fn main() {
	let fun = |num| num + 1;
	let i = fun(2);
	println!("hello world {}",i);
}
`.trim();

const background_image = staticFile("desktop-wallpaper-scar-lion-king.jpg");
const theStyle = shadesOfPurple;
theStyle.hljs.fontSize = "4rem";
theStyle.hljs.opacity = "1";


SyntaxHighlighter.registerLanguage("rust",rs) 

const Editor = () => {
	const frame = useCurrentFrame();

  return (
    <SyntaxHighlighter showLineNumbers={true} style={theStyle}>
      {text.length >= frame ? text.slice(0,frame) : text}
    </SyntaxHighlighter>
  );
};

export const MyComposition = () => {
	return (
		<>
			<Img src={background_image}></Img>
			<section
				style={{
					position : "absolute",
					top : "4px",
					right : "4px",
					background : theStyle.hljs.background,
					opacity : "0.6",
					border : "solid 2px",
					borderColor : "#FFB53A",
					width : "99.5%",
					height : "99%",
					zIndex: 1,
				}}
				>
					<Editor/>
			</section>
		</>
	)
};

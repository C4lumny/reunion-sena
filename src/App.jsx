import { Links } from "./Links";

export function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-10">
      <div className="text-5xl">
        <h1>Jose Restrepo - Tu mejor opción para programar</h1>
      </div>

      <h3>Contactame! - Aqui mis redes sociales:</h3>
      <div className="gap-5 flex flex-col">
        <Links imagen={"https://www.facebook.com/images/fb_icon_325x325.png"} text={'Facebook'} id={1}/>
        <Links imagen={"https://graffica.ams3.digitaloceanspaces.com/2023/07/rQYXqS5v-F1ySdm9WYAIbjHo-1024x1024.jpeg"} text={"X"} id={1}/>
        <Links imagen={"https://www.unipile.com/wp-content/uploads/2022/09/logo_instagram.png"} text={"Instagram"} id={2}/>
      </div>
    </div>
  );
}


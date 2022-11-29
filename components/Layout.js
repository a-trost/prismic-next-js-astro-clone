import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ navigation, settings, children }) => {
  return (
    <div className="text-slate-800">
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer navigation={navigation} settings={settings} />
    </div>
  );
};

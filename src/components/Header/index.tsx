import { Avatar, Container, Logo } from "./styles";
import LogoImg from "@assets/Logo.png";
import AvatarImg from "@assets/Avatar.png";

export function Header() {
  return (
    <Container>
      <Logo source={LogoImg} />
      <Avatar source={AvatarImg} />
    </Container>
  );
}

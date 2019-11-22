import React from "react";
import { Reveal, Image, Grid, Header, Icon } from "semantic-ui-react";
import { Link } from "@reach/router";
import "./ErrorPage.scss";
import { errorBanners } from "../utils/auxiliarData";

function ErrorPage() {
  const errorMessage = "Esta página no está disponible en nuestro sitio.";
  const urlMessage = "Siguiendo este enlace puedes seguir comprando :)";

  return (
    <>
      <Grid.Column className="error-message-container">
        <Header textAlign="center" className="center-text" as="h1">
          {errorMessage}
        </Header>
        <p>
          <Icon
            name="hand point right outline"
            size="big"
            aria-label="Seguir enlace"
          />

          <Link to="/">{urlMessage}</Link>
        </p>
      </Grid.Column>
      <Grid id="banners" columns={4} padded centered>
        {errorBanners.map(banner => (
          <Grid.Column width={3} key={banner.id}>
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Image alt={banner.alt} src={banner.src} size="medium" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Header textAlign="center" className="center-text" as="h3">
                  {banner.description}
                </Header>
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
}

export default ErrorPage;

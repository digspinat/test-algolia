import React from "react"
import { Container, Segment, Header, Icon, Grid, Divider, Image, Menu, Input, List } from "semantic-ui-react";
import {InstantSearch, SearchBox, Hits, RefinementList, Pagination, Panel} from 'react-instantsearch/dom';

function Searchcomp({hit, index}) {
  console.log(hit)
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <Image src={hit.manualImgixUrlProduct} height="401" width="310"/>
      <Header as="h4">
        <Header.Content>
          {hit.manualTitle}
        </Header.Content>
      </Header>
    </Grid.Column>
  );
}

export default () => {
  return (
    <div className="ui container">
      <Container>
        <InstantSearch appId="YZO8M6AZ6J" apiKey="74516bbcef74ec917e2acbcd0df2df0f" indexName="contentful-cml">
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Panel title="Brand">
                <RefinementList attributeName="partialAlgoliaMake" limitMax={20} limitMin={10} operator="or" showMore={false} withSearchBox={false} />
              </Panel><br />
              <Panel title="Series">
                <RefinementList attributeName="partialAlgoliaSerie" limitMax={20} limitMin={10} operator="or" showMore={false} withSearchBox={false} />
              </Panel><br />
              <Panel title="Sub Series">
                <RefinementList attributeName="partialAlgoliaSubSerie" limitMax={20} limitMin={10} operator="or" showMore={false} withSearchBox={false} />
              </Panel><br />
              <Panel title="Platform">
                <RefinementList attributeName="partialAlgoliaPlatform" limitMax={20} limitMin={10} operator="or" showMore={false} withSearchBox={false} />
              </Panel><br />
              <Panel title="Years">
                <RefinementList attributeName="partialAlgoliaYears" limitMax={20} limitMin={10} operator="or" showMore={false} withSearchBox={false} />
              </Panel><br />
              <Panel title="Fuel Type">
                <RefinementList attributeName="partialAlgoliaFuelType" limitMax={20} limitMin={10} operator="or" showMore={false} withSearchBox={false} />
              </Panel>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={12}>
              <SearchBox />
              <br /><br />
              <Grid>
                <Hits hitComponent={Searchcomp} />
              </Grid>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={4}></Grid.Column>
            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={12}>
              <Pagination maxPages={3} pagesPadding={2} showFirst showLast showNext showPrevious />
            </Grid.Column>
          </Grid>
        </InstantSearch>
      </Container>
    </div>
  )
}

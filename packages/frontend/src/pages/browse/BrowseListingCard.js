import React, {useState} from "react";
import {Button, Grid, Image, Modal, Card, Label, Icon, Header, Segment, Container} from "semantic-ui-react";
import BrowseItemDetails from "./BrowseListingDetails";
import config from "../../config";

function BrowseListingCard(props) {

    const {item} = props;

    return (

        <Modal closeIcon
               trigger={
                   <Card>
                       <Image wrapped ui={false} size="small"
                              label={{
                                  color: item.category_data.color,
                                  content: item.category_data.name,
                                  ribbon: true,
                                  size: "small",
                              }}
                              src={`${config.apiDomain}/image/card/listing/${item.listing_data.code}`}/>
                       <Card.Content extra>
                           <Header className="oku" size="small">{item.listing_data.name}</Header>
                       </Card.Content>
                       <Button style={{textAlign: "left"}} fluid color={`${item.category_data.color}`}>
                           <Grid.Row><h4>Asking Price</h4> ${item.listing_data.askingPrice} </Grid.Row>
                       </Button>
                   </Card>
               }>
            <Modal.Content scrolling>
                <BrowseItemDetails quickLook passed_listing={item}/>
            </Modal.Content>
        </Modal>


    );
}

export default BrowseListingCard;

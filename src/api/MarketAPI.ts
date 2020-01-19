import ApolloClient, {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";

const _marketClient = new ApolloClient({
    uri: 'https://ensenada-fxuevruz4a-uc.a.run.app/',
});

export class MarketAPI {

    public static getMarkets(zip: string) {

        const query = gql`{ marketZipCode(zipcode: "${zip}") {
            x
            y
            Location
          }
        }`;

        return useQuery(query, {
            client: _marketClient
        });
    }

    
}

/**
 * @flow
 * @relayHash ebe14be9f4bccba948245ddd6d2a05cf
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type EnsayoDeleteMutationVariables = {|
  input: {
    id: string;
    clientMutationId?: ?string;
  };
|};
export type EnsayoDeleteMutationResponse = {|
  +EnsayoDelete: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation EnsayoDeleteMutation(
  $input: EnsayoDeleteInput!
) {
  EnsayoDelete(input: $input) {
    deletedId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "EnsayoDeleteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EnsayoDeleteMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "EnsayoDeleteInput!"
          }
        ],
        "concreteType": "EnsayoDeletePayload",
        "name": "EnsayoDelete",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "EnsayoDeleteMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "EnsayoDeleteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "EnsayoDeleteMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "EnsayoDeleteInput!"
          }
        ],
        "concreteType": "EnsayoDeletePayload",
        "name": "EnsayoDelete",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation EnsayoDeleteMutation(\n  $input: EnsayoDeleteInput!\n) {\n  EnsayoDelete(input: $input) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;

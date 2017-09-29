/**
 * @flow
 * @relayHash 8cec3a23b316e97ccd531b7ce33e5ca5
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type InscriptioDeleteMutationVariables = {|
  input: {
    id: string;
    clientMutationId?: ?string;
  };
|};
export type InscriptioDeleteMutationResponse = {|
  +InscriptioDelete: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation InscriptioDeleteMutation(
  $input: InscriptioDeleteInput!
) {
  InscriptioDelete(input: $input) {
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
        "type": "InscriptioDeleteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "InscriptioDeleteMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "InscriptioDeleteInput!"
          }
        ],
        "concreteType": "InscriptioDeletePayload",
        "name": "InscriptioDelete",
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
  "name": "InscriptioDeleteMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "InscriptioDeleteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "InscriptioDeleteMutation",
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
            "type": "InscriptioDeleteInput!"
          }
        ],
        "concreteType": "InscriptioDeletePayload",
        "name": "InscriptioDelete",
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
  "text": "mutation InscriptioDeleteMutation(\n  $input: InscriptioDeleteInput!\n) {\n  InscriptioDelete(input: $input) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;

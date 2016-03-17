## Quickstart
- `npm install`
- `npm start`
- `go to http://localhost:5000`

## Env vars
Environment is passed to front-end code via index.hjs and this file needs to be edited.
For feature flags add line:

    {{#feature}}FEATURE_<your_feature_name>{{/feature}}

and in code use function:

    featureTurnedOn(<your_feature_name>)

For env vars add line:

    {{#envVar}}<your_var_name>{{/envVar}}

and in code access it like normal JS variable named:

    if (<your_var_name>) {...}

Note: remember to also add env vars to `config vars` property of configurations in `infrastructure/` directory.
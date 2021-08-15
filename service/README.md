# Service

Service is where the Fluence Rust module used for the demo is located.

## Architecture 

The module Rust code can be found in `./src/main.rs`. 

It is composed of a structure `DataStructure` which is the dataset structure that should be used
in pair with the code and a function `service()` which is the function we are calling while 
transforming data.

_Note: It has to be noted that all uploaded module to the Web App should have this function called
service but can have different DataStructure attributes._

In `./artifacts` are located the basic dataset usable for the current module and also the wasm file 
pre-built for the demo module.

## Build

**Dependencies**
The marine CLI (install guidelines can be found [here](https://doc.fluence.dev/docs/tutorials_tutorials/recipes_setting_up))
should be installed on your machine.

To build a new module you can use the `build.sh` script. It leverages the marine CLI and copies 
generated artifacts to the `./artifacts` folder.

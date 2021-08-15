use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

module_manifest!();

pub fn main() {}

#[marine]
pub struct DataStructure {
    pub number: i32,
    pub string: String,
    pub bool: bool,

}


#[marine]
pub fn service(arg_0: DataStructure) -> DataStructure {
    let string = arg_0.string.to_owned();

    DataStructure {
        number: arg_0.number + 10,
        string: String::from(string + " new_string"),
        bool: !arg_0.bool
    }
}

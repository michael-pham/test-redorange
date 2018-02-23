if ({{item_name_in_camel_case}}Params.filtering.{{attribute_name}}_range.startDate) {
  filteringParams.push(["{{attribute_name}}",
    moment({{item_name_in_camel_case}}Params.filtering.{{attribute_name}}_range.startDate)
      .format('YYYY-MM-DD'), "gt"]);
}

if ({{item_name_in_camel_case}}Params.filtering.{{attribute_name}}_range.endDate) {
  filteringParams.push(["{{attribute_name}}",
    moment({{item_name_in_camel_case}}Params.filtering.{{attribute_name}}_range.endDate)
      .format('YYYY-MM-DD'), "lt"]);
}

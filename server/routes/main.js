// main
get "/" => "main#index"
get "/test" => "test#index"

// error
get "/error" => "error#base"

// common
get "*" => "main#common"

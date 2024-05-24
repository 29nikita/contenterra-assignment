export interface Child{
    data: any,
    kind: String
}

export interface Data{
    after: string,
    dist: number,
    modhash: string,
    geo_filter: string
    children: Child[]
}

export interface ApiResponse {
    data: Data;
}
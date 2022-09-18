

# Ndhm

This project was generated using [Nx](https://nx.dev).

## Simply Run Locally

> nx run-many --target=serve 

Basic Architechture : 

                                                                ---> S3 BUCKET 

 NDHM-GATEWAY ---->  HRP-SERVICE --->   KAFKA-EVENT ->  HIP/HIU-BRIDGE MICROSERVICE   ---> ENCRYPTION FIDILUIS 
                                                            |
                                                            V

 PHRUSER ---- > API-GATEWAY -> HEALTHID-SERVICE  ->     NDHM-CLIENT-CORE-SESSION   

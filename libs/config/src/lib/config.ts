export const DEFAULT_HOST=`192.168.1.26`
export const EnvironmentNames={
      clientService:{
          PATIENT_STORE:{ 
                 HOST:'MS_PATIENT_STORE_HOST',PORT:'MS_PATIENT_STORE_PORT'
           }
      },
      appService:{
            
      },
      kafka:{
            BROKER_ADDRESSLIST:`KAFKA_BROKER_ADDRESSLIST`
      }
}; 
const APPLICATION_NAMES=['healthid','hrp','microservice-ndhm-client',
            'microservice-hip','microservice-hiu','microservice-ndhm-store']; 

export const ApplicationConfig={
      api:{       
            HEALTHID_API:{PORT:3333},
            HRP_API:{PORT:3001},
      },
      microservice:{
            NDHM_CLIENT:{PORT:3500},
            NDHM_STORE:{PORT:3011},
            HIP:{PORT:3012},
            HIU:{PORT:3013},
      },
      kafka:{
            DEFAULT_BROKERS:`192.168.1.26:9092`
      }
}

export const ClientConfig={
      PATIENT_STORE:{DEFAULT_HOST,DEFAULT_PORT:3600}
}

export const AppEventPatterns={
       patient:{
          profile:{
              share:`patient.profile.share`
          }
       }
}

export const ServiceNames={
     NDHM_CLIENT_SERVICE:`NDHM_CLIENT_SERVICE`,
     PATIENT_STORE_SERVICE:`PATIENT_STORE`
}
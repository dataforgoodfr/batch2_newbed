
# Timothée, October 12th, 2016 :
#   Data obtained October 12th, 2016, encoding is natively in Latin-3, modified in UTF-8
#   On https://www.classement.atout-france.fr/hebergements-classes, 
#   select the 5 types of establishment and download the CSV
filePath <- "/Users/timothee/Dev/batch2_newbed/" # modify it to suit your local directory
fileName <- "liste_etablissements.csv"
d <- read.table(file = paste0(filePath, fileName), sep=";", header=TRUE)

## Cleaning the data
# Get clean integer
d$NOMBRE.D.EMPLACEMENTS[d$NOMBRE.D.EMPLACEMENTS=="-"] = NA
d$NOMBRE.D.EMPLACEMENTS = as.integer(d$NOMBRE.D.EMPLACEMENTS)
d$NOMBRE.DE.CHAMBRES[d$NOMBRE.DE.CHAMBRES=="-"] = NA
d$NOMBRE.DE.CHAMBRES = as.integer(d$NOMBRE.DE.CHAMBRES)
d$NOMBRE.DE.LOGEMENTS[d$NOMBRE.DE.LOGEMENTS=="-"] = NA
d$NOMBRE.DE.LOGEMENTS = as.integer(d$NOMBRE.DE.LOGEMENTS)
d$NOMBRE.D.UNITES.D.HABITATION[d$NOMBRE.D.UNITES.D.HABITATION=="-"] = NA
d$NOMBRE.D.UNITES.D.HABITATION = as.integer(d$NOMBRE.D.UNITES.D.HABITATION)


table(d$TYPOLOGIE.ÉTABLISSEMENT)
table(d$CLASSEMENT)

d$NOT_LUXE <- d$CLASSEMENT %in% c("1 étoile", "2 étoiles")

length(d$NOT_LUXE[d$NOT_LUXE])


## Detect the hotel brand

hotels <- d[d$TYPOLOGIE.ÉTABLISSEMENT == "HÔTEL",] #Only hotels
hotels$NOM.COMMERCIAL <- as.character(hotels$NOM.COMMERCIAL) #Name in character rather than factor

brand_hotels <- c("HILTON", "HOLIDAY", "WESTERN", "RENAISSANCE", "NOVOTEL", "CAMPANILE", "MERCURE", "COMFORT", "KYRIAD", "HYATT", "TIMHOTEL", "IBIS", "F1", "COMFORT", "PREMIERE", "PREMIÈRE", "CLASSICS", "ETAP", "SPLENDID")

# Solution 1 par 1
# exemple sans la fonction select_hotel_brand 
# novotel = which(sapply(hotels$NOM.COMMERCIAL, FUN = function(h_name){any("NOVOTEL" %in% unlist(strsplit(h_name, split=" ")))}))

select_hotel_brand = function(brand_name_word){
    which(sapply(hotels$NOM.COMMERCIAL, FUN = function(h_name)
                 {brand_name_word %in% unlist(strsplit(h_name, split=" "))}))
}

all_brand_hotels = sapply(brand_hotels, select_hotel_brand)
# lu <- sapply(all_brand_hotels, unname)
# sort(unname(unlist(lu)))

sort(unname(unlist(sapply(all_brand_hotels, unname)))) #Tous les index d'hôtels qui appartiennent à une chaîne

ind <- unname(unlist(sapply(all_brand_hotels, unname)))
hotels$FLAG_ENSEIGNE = FALSE
hotels[ind,]$FLAG_ENSEIGNE = TRUE

# recherche de duplicate?
# duplicated(sort(unname(unlist(sapply(all_brand_hotels, unname)))))

index_done <- which(hotels$ENSEIGNE)

# Hotel par Hotel
hilton = select_hotel_brand("HILTON")
holiday = select_hotel_brand("HOLIDAY")
western = select_hotel_brand("WESTERN")
renaissance = select_hotel_brand("RENAISSANCE")
campanile = select_hotel_brand("CAMPANILE")
mercure = select_hotel_brand("MERCURE")
comfort = select_hotel_brand("COMFORT")
kyriad = select_hotel_brand("KYRIAD")
hyatt = select_hotel_brand("HYATT")
timhotel = select_hotel_brand("TIMHOTEL")
ibis = select_hotel_brand("IBIS")
F1 = select_hotel_brand("F1")
classics = select_hotel_brand("CLASSICS")
etap = select_hotel_brand("ETAP")
splendid = select_hotel_brand("SPLENDID")
PremiereClasse = c(select_hotel_brand("PREMIERE"), select_hotel_brand("PREMIÈRE"))

# Solution "mot par mot"
# find_hotel_brand = function(h_name){
#    any(brand_hotels %in% unlist(strsplit(h_name, split=" "))) # Renvoie pas le nom de la chaîne..
#}
# hotels$ENSEIGNE = sapply(hotels$NOM.COMMERCIAL, FUN = function(h_name){any(brand_hotels %in% unlist(strsplit(h_name, split=" ")))})

# Hôtels qui n'ont pas d'enseigne
hotels[hotels$FLAG_ENSEIGNE==FALSE, "NOM.COMMERCIAL"]

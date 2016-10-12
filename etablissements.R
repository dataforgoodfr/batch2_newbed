
# Timothée, October 12th, 2016 :
#   Data obtained October 12th, 2016, encoding is natively in Latin-3, modified in UTF-8
#   On https://www.classement.atout-france.fr/hebergements-classes, 
#   select the 5 types of establishment and download the CSV
filePath <- "/Users/timothee/Dev/R/Data\ for\ good/" # modify it to suit your local directory
fileName <- "list_establishments.csv"
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

d$NOT_LUXE <- d$CLASSEMENT %in% c("1 étoile", "2 étoiles", "3 étoiles")

length(d$NOT_LUXE[d$NOT_LUXE])



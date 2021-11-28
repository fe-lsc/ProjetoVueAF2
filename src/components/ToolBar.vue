<template>
    <div>
        <system-bar clipped-left>
        </system-bar>

        <!-- Tool bar  -->
        <div>
            <v-app-bar clipped-left class="base" app> 
            </v-app-bar>
        </div>
        <div>
            <v-card
                color="grey lighten-4"
                flat
                height="200px"
                tile
            >
            <v-toolbar >
                

                <v-toolbar-title>Lista Links</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-order-alphabetical-ascending</v-icon>
                </v-btn>
            </v-toolbar>
        </v-card>
        </div>
        
        <!--Collapsed Tool Bar-->
        <v-card
            color="grey lighten-4"
            flat
            height="200px"
            tile
        >
        <v-toolbar collapse>
        

        <v-btn icon>
            <v-icon>mdi-expand-all</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        </v-toolbar>
        </v-card>
       
    </div>
</template>

<script>
export default {
    props: ["SearchBar"]
}
</script>
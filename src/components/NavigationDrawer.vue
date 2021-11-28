<template>
    <v-navigation-drawer  app color="purple lighten-4" class="navigation-drawer" >
        <v-list >
            <v-list-item class="item-list" link @click="$router.push('/')">
                <v-btn icon>
                    <v-icon>mdi-home</v-icon>
                    Inform.
                </v-btn>
            </v-list-item>
            <v-list-item class="item-list" link @click="$router.push('/estudo')">
                <v-btn icon>
                    <v-icon>mdi-school-outline</v-icon>
                    Estudo
                </v-btn>
            </v-list-item>
            <v-list-item class="item-list" link @click="$router.push('/compra')">
                <v-btn icon>
                    <v-icon>mdi-cash</v-icon>
                    Compra
                </v-btn>
            </v-list-item>
            <v-list-item class="item-list" link @click="$router.push('/pessoal')">
                <v-btn icon>
                    <v-icon>mdi-account-heart</v-icon>
                    Pessoal
                </v-btn>
            </v-list-item>
            <v-list-item class="item-list" link @click="$router.push('/outro')">
                <v-btn icon>
                    <v-icon>mdi-dots-hexagon</v-icon>
                    Outros
                </v-btn>
            </v-list-item>
        </v-list>
        
    </v-navigation-drawer>
</template>

<style scoped>
    .navigation-drawer{
        margin: auto;
        width: 50%;
        border: 3px;
        padding: 10px;
    }
    .item-list{
        margin: 0 20%;
    }
</style>
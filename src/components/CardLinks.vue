<template>
    <v-content>
        <v-card app color="purple accent-1">
            <v-card-title> {{ link.name }} </v-card-title>
            <v-card-subtitle> {{link.type}} </v-card-subtitle>
            <v-card-text> {{ link.adress}} </v-card-text>
        </v-card>
    </v-content>
</template>


<script>
export default {
    props: ["link"]
}
</script>